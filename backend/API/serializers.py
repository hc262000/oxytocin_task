from rest_framework import serializers
from API.models import Books,BookMark,Content

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ('sno',
                'thumbnail',
                'title',
                'author',
                'tags',
                'summary',
                'publication',
                'year')

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ('sno',
                'book',
                'chapter',
                'title',
                'content',
                )

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookMark
        fields = ('sno',
                'field',
                'describe',
                )

