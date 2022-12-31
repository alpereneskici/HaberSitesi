from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics,status,permissions
from .serializers import (
        UserLoginSerializer,
        UserRegistrationSerializer,
        UserDetailsSerializer,
        UserSerializer,
        ForgetPasswordSerializer,
        ResetNewPasswordSerializer)
from .models import User
from django.contrib.auth import authenticate
from knox.models import AuthToken

# Create your views here.
class UserLoginView(generics.GenericAPIView):

    serializer_class = UserLoginSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data["user"]
            token = AuthToken.objects.create(user)
            return Response(
                {
                    "users": UserDetailsSerializer(user, context=self.get_serializer_context()).data,
                    "token": token[1],
                },
                status=status.HTTP_200_OK,
            )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UserRegisterView(generics.GenericAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
           
            return Response(
                {
                    "Message":"Succsessful",
                }
            )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



class UserDetailsView(generics.GenericAPIView):
    serializer_class = UserDetailsSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        queryset = User.objects.filter(email = request.user)
        serialzier = UserDetailsSerializer(queryset,many=True)
        return Response({"Message":serialzier.data},status=status.HTTP_200_OK)
    


class ForgetPasswordView(generics.GenericAPIView):
    serializer_class = ForgetPasswordSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ResetForgetPasswordView(generics.GenericAPIView):
    serializer_class = ResetNewPasswordSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(kwargs)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
