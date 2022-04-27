#!/bin/bash
#chromium --run-all-compositor-stages-before-draw --headless --screenshot="au.png" --hide-scrollbars --window-size=1800,1200 "https://ala.org.au"
#chromium --virtual-time-budget=5000 --run-all-compositor-stages-before-draw --headless --screenshot="se.png" --hide-scrollbars --window-size=1800,1200 "https://biodiversitydata.se/"
for i in \
https://nbnatlas.org%uk \
https://tanbif.costech.or.tz%tz \
https://ala.org.au%au \
http://crbio.cr%cr \
https://biodiversityatlas.at%at \
https://biodiversitydata.se%se \
http://canadensys.net%ca \
https://elurikkus.ee/en%ee \
https://gbif.ad%ad \
http://datos.sndb.mincyt.gob.ar%ar \
http://portail.gbif.fr%fr \
https://dados.gbif.pt%pt \
https://datos.gbif.es%es \
https://www.sibbr.gov.br%br \
https://snib.conap.gob.gt%gt \
http://portail.gbifbenin.org%bj \
http://portail.togo.gbif.fr/%tg \
https://openobs.mnhn.fr%fr2 \
https://vtatlasoflife.org%vt
do
   IFS=% read var1 var2 <<< $i
   #chromium --run-all-compositor-stages-before-draw --virtual-time-budget=5000 --headless --screenshot="assets/img/participants/$var2.png" --hide-scrollbars --window-size=1800,1200 --disable-translate --disable-gpu "$var1"

   #chromium --timeout=10000 --headless "$var1" --run-all-compositor-stages-before-draw --screenshot="assets/img/participants/$var2.png" --hide-scrollbars --window-size=1800,1200 --disable-translate --disable-gpu --virtual-time-budget=10000
   # puppeteer-screenshot --url $var1 --output "assets/img/participants/$var2.png" --width 1800 --height 1200
   # pappet -s --width 1800 --height 1200 $var1 # --output "assets/img/participants/$var2.png"
   # ## Remove protocol part of url  ##
   # f=$var1
   # f="${f#http://}"
   # f="${f#https://}"
   # f=${f%%/*}
   # echo mv $f/*png "assets/img/participants/$var2.png"
   # mv $f/*png "assets/img/participants/$var2.png"
   # rmdir $f


   # https://github.com/sindresorhus/pageres"
   pageres "$var1?lang=en" 2000x1600 --filename="assets/img/participants/$var2" --delay=5 --overwrite --crop --hide "#cookie-notice-container"
done
