@ECHO off    
if /I %1 == start goto :start
if /I %1 == status goto :status
if /I %1 == stop goto :stop

:start
docker-compose up -d --build
goto :eof

:status:
docker-compose ps -a
goto :eof

:stop:
docker-compose down
goto :eof