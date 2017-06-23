# kgorlov.github.io
my web site

# Конвертируем видео с Canon

1. к кодеку mp4 (h264)
2. выключили звук -an
3. начали с 0 секунды, взяли фрагмент 5сек
4. изменили соотношение с 4:3 на 16:9

```
ffmpeg -an -i MVI_5079.AVI -vcodec libx264 -pix_fmt yuv420p -profile:v baseline -level 3 -ss 00:00:00 -t 5 -vf " rotate=0*(PI/180), hqdn3d=1.5:1.5:6:6,  scale=min(856\,iw):trunc(ow/a/2)*2+1:-1, scale=iw*sar:ih, crop=min(iw\,ih*(16/9)):ow/(16/9)" thumbsup.mp4
```

```
ffmpeg -an -i MVI_5079.AVI -vcodec libvpx-vp9 -b:v 1M -acodec libvorbis -level 3 -ss 00:00:00 -t 5 -vf " rotate=0*(PI/180), hqdn3d=1.5:1.5:6:6,  scale=min(856\,iw):trunc(ow/a/2)*2+1:-1, scale=iw*sar:ih, crop=min(iw\,ih*(16/9)):ow/(16/9)" thumbsup.webm
```
https://gist.github.com/Vestride/278e13915894821e1d6f
