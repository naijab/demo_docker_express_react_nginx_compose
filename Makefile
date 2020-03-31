start:
	docker-compose up -d --build

status:
	docker-compose ps -a

stop:
	docker-compose down