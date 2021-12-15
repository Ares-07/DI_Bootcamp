from django.db import models

# Create your models here.

class Family(models.Model):
	
	class Meta:
		db_table = 'family'	

	# models.AutoField() same as serial in postgres		
	id = models.AutoField(primary_key = True)
	name = models.CharField(max_length = 255)


	def __str__(self):
		return self.name

class Animal(models.Model):
	
	class Meta:
		db_table = 'animals'	

	# models.AutoField() same as serial in postgres		
	id = models.AutoField(primary_key = True)
	name = models.CharField(max_length = 50)
	legs = models.IntegerField()
	weight = models.IntegerField()
	height = models.IntegerField()
	speed = models.IntegerField()
	family_id = models.IntegerField()
	family = models.CharField(max_length = 50)

	def __str__(self):
		return self.name