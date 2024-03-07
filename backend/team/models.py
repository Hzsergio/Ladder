from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(unique=True, max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    captain_name = models.CharField(max_length=100) 

    def __str__(self):
        return self.name