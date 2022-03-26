from curses import flash
from django.shortcuts import render,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from API.models import Books,BookMark,Content
from API.serializers import BookmarkSerializer,BookSerializer,ContentSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def bookApi(request,id='-1'): 
    if request.method=='GET':
        if id=='-1':
            books= Books.objects.all()
            books_serializer = BookSerializer(books, many=True)
            return JsonResponse(books_serializer.data, safe=False)
        else:
            book=Books.objects.filter(sno=id)
            book_serializer = BookSerializer(book,many=True)
            return JsonResponse(book_serializer.data, safe=False)

    elif request.method=='POST':
        book_data=JSONParser().parse(request)
        print(book_data)
        book_serializer = BookSerializer(data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        book_data = JSONParser().parse(request)
        book=Books.objects.get(sno=id)
        book_serializer=BookSerializer(book,data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        book=Books.objects.get(sno=id)
        book.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
@csrf_exempt
def contentApi(request,id='-1'): 
    if request.method=='GET':
        if id=='-1':
            chapter= Content.objects.all()
            chapter_serializer = ContentSerializer(chapter, many=True)
            return JsonResponse(chapter_serializer.data, safe=False)
        else:
            chapters=Content.objects.filter(book=id)
            chapters_serializer = ContentSerializer(chapters,many=True)
            return JsonResponse(chapters_serializer.data, safe=False)
    elif request.method=='POST':
        chapter_data=JSONParser().parse(request)
        print(chapter_data)
        chapter_serializer = ContentSerializer(data=chapter_data)
        if chapter_serializer.is_valid():
            chapter_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)

    
@csrf_exempt
def bookmarkApi(request,id='-1'): 
    if request.method=='GET':
        if id=='-1':
            bookmark= BookMark.objects.all()
            books_serializer = BookmarkSerializer(bookmark, many=True)
            return JsonResponse(books_serializer.data, safe=False)
        else:
            book=BookMark.objects.filter(sno=id)
            book_serializer = BookmarkSerializer(book,many=True)
            return JsonResponse(book_serializer.data, safe=False)

    elif request.method=='POST':
        book_data=JSONParser().parse(request)
        print(book_data)
        book_serializer = BookmarkSerializer(data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    

    elif request.method=='DELETE':
        book=BookMark.objects.get(sno=id)
        book.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)



