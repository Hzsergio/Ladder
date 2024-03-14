from rest_framework import serializers
from .models import *

class CreateTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name','captain')


class TeamSerializer(serializers.ModelSerializer):
    captain_username = serializers.SerializerMethodField()

    class Meta:
        model = Team
        fields = ('id', 'name','captain', 'users', 'captain_username')

    def get_captain_username(self, obj):
        return obj.captain.username


