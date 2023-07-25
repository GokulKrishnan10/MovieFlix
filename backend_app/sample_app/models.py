from django.db import models

# Create your models here.
class User(models.Model):
	name=models.CharField(max_length=30)
	email_id=models.CharField(max_length=40,primary_key=True,unique=True)
	password=models.CharField(max_length=50)
	phone_number=models.CharField(max_length=10)
	def __str__(self):
		return self.email_id

class Favorite(models.Model):
	email_id=models.CharField(max_length=40)
	poster_path=models.CharField(max_length=100)
	original_title=models.CharField(max_length=100)
	vote_average=models.CharField(max_length=100)
	def __str__(self):
		return self.email_id
