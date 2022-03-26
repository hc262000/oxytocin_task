from dataclasses import field
from pydoc import describe
from django.db import models

class Books(models.Model):
    sno=models.AutoField(primary_key=True)
    thumbnail=models.ImageField(upload_to="books")
    title=models.TextField()
    author=models.CharField(max_length=1000)
    tags=models.CharField(max_length=1000)
    summary=models.TextField()
    publication=models.CharField(max_length=1000)
    year=models.DateField()


    def __self__(self):
        return self.title

class Content(models.Model):
    sno=models.AutoField(primary_key=True)
    book=models.ForeignKey(Books,on_delete=models.CASCADE)
    chapter=models.IntegerField()
    title=models.TextField()
    content=models.TextField()

    def __self__(self):
        return self.title

class BookMark(models.Model):
    sno=models.AutoField(primary_key=True)
    field=models.ForeignKey(Content,on_delete=models.CASCADE)
    describe=models.TextField()

    def __self__(self):
        return self.describe




