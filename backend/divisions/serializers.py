from rest_framework import serializers
from .models import User, Team, Division,TeamInDivision

class TeamInDivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamInDivision
        fields = ('division','team','position')

class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
        fields = ('name','admin','publicProfile')