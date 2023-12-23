from django.db import models
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.name
