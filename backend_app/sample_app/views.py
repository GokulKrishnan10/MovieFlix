from django.shortcuts import render

# Create your views here.
from django.db import connection
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse, HttpResponse
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User
from .models import Favorite as Favorites 

def get_user(request):
	val=User.objects.all().values()
	print('Values are ',val)
	values=list(val.values())
	#'name','emial_id','password','phone_number')
	print('Values from query set-------------------------',values)	
	return JsonResponse({'message':values},safe=False)

def get_favorites(request):
	val=Favorites.objects.all().values()
	values=list(val.values())
	return JsonResponse({'favorites':values})

def get_fav(request):
	print('Query params are', request.GET.get('mail'))
	mail=str(request.GET.get('mail'))
	print('This is the mail you are getting',mail)
	val=Favorites.objects.filter(email_id=mail)
	print('Values for single user is',val.values())
	return JsonResponse({'Message':list(val.values())})

@csrf_exempt
def delete_favorite(request):
	if request.method=='DELETE':
		print('In DELETE request is---------------',request.body)
		payload=json.loads(request.body)
		print('Payload is', payload)
		value=Favorites.objects.filter(email_id=payload['email'], original_title=payload['original_title'], \
		poster_path=payload['poster_path'], vote_average=payload['vote_average'])
		print('Values in delete is',list(value.values()))
		value.delete()
		return JsonResponse({'message':'Deleted successfully'}, status=204)

@csrf_exempt
def add_favor(request):
	if request.method=='POST':
		payload=json.loads(request.body)
		print('User data from favorites API',payload)
		fav=Favorites(email_id=payload['email'],poster_path=payload['poster_path'], original_title= \
		payload['original_title'], vote_average=payload['vote_average'])
		fav.save() 
		val=Favorites.objects.all().values()
		print('Added to users favorites',val)
		return JsonResponse({'message':'Added to user favorites'})

@csrf_exempt
def check_user(request):
	if request.method=='POST':
		payload=json.loads(request.body)
		try:
			email=User.objects.get(email_id=payload['email'])
			is_valid=check_password(payload['password'], email.password)
			if is_valid:
				return JsonResponse({'user':{'email':email.email_id, 'password':email.password}}, status=200)
			else:
				return JsonResponse({'error':'Wrong Password'}, status=404)
		except Exception as e:
			return JsonResponse({'error':'User does not exist'}, status=404)


@csrf_exempt
def post_user(request):
	if request.method=='POST':
		payload=json.loads(request.body)
		print('Payload is', payload)
		try:
			email=User.objects.get(email_id=payload['email'])
			if str(payload['email']) == str(email):
				return JsonResponse({'error':'Duplicate Email Id'}, status=400)
		except Exception as e:
			print('No problem with email')
		hashed_password=make_password(payload['password'])
		print('Hashed Version of password is------------',hashed_password)
		is_valid=check_password('Gojdhsjh', hashed_password)
		print('Checking if both the passwords are valid',is_valid)
		new_user=User(name=payload['name'],email_id=payload['email'],password=hashed_password,phone_number=payload['phone_number'])
		new_user.save()
		return JsonResponse({'message': 'User successfully added'},safe=False)
