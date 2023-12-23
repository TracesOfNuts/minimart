from django.db import migrations
from django.core.files import File

def upload_images(apps, schema_editor):
    # populate 'products' table with 5 products
    product = apps.get_model('products', 'Product')

    # get the image file
    banana_image = File(open('media/images/banana.jpg', 'rb'))
    red_chilli_image = File(open('media/images/chilli.jpg', 'rb'))
    cinnamon_image = File(open('media/images/cinnamon.jpg', 'rb'))
    eggs_image = File(open('media/images/eggs.jpg', 'rb'))
    garlic_image = File(open('media/images/garlic.jpg', 'rb'))

    # get the products
    banana = product.objects.get(id=1)
    red_chilli = product.objects.get(id=2)
    cinnamon = product.objects.get(id=3)
    eggs = product.objects.get(id=4)
    garlic = product.objects.get(id=5)

    # assign the images to the products
    banana.image.save('banana.jpg', banana_image)
    red_chilli.image.save('red-chilli.jpg', red_chilli_image)
    cinnamon.image.save('cinnamon.jpg', cinnamon_image)
    eggs.image.save('eggs.jpg', eggs_image)
    garlic.image.save('garlic.jpg', garlic_image)


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_populate_db'),
    ]

    operations = [
        migrations.RunPython(upload_images),
    ]