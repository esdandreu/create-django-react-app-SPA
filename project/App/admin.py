from django.contrib import admin
from .models import Task, Freelancer, ActiveMailbox, Campaign, CampaignCategory, TaskCategory

# Register your models here.
admin.site.register(Task)
admin.site.register(Freelancer)
admin.site.register(ActiveMailbox)
admin.site.register(Campaign)
admin.site.register(CampaignCategory)
admin.site.register(TaskCategory)
