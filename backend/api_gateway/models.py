from django.db import models
from django.db.models import JSONField


class Book(models.Model):
    title = models.CharField(max_length=255)
    pages = models.JSONField()
