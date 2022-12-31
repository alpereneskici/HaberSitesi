from django.db import models
from apps.user.models import User
import uuid
# Create your models here.


class paper(models.Model):
    publicer = models.ManyToManyField(User)
    contents = models.TextField()
    headers = models.CharField(max_length=50,null=True)
    paper_id = models.CharField(max_length=32,null=False,unique=True)