from django.db import models
from django.core.validators import MinValueValidator


class DatosPersonales(models.Model):
    idperfil = models.AutoField(primary_key=True, db_column='idperfil')
    descripcionperfil = models.CharField(max_length=50, db_column='descripcionperfil')
    perfilactivo = models.IntegerField(db_column='perfilactivo', validators=[MinValueValidator(0)])
    apellidos = models.CharField(max_length=60, db_column='apellidos')
    nombres = models.CharField(max_length=60, db_column='nombres')
    nacionalidad = models.CharField(max_length=20, db_column='nacionalidad')
    lugarnacimiento = models.CharField(max_length=60, db_column='lugarnacimiento')
    fechanacimiento = models.DateField(db_column='fechanacimiento')
    numerocedula = models.CharField(max_length=10, unique=True, db_column='numerocedula')

    SEXO_CHOICES = [
        ('H', 'H'),
        ('M', 'M'),
    ]
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, db_column='sexo')

    estadocivil = models.CharField(max_length=50, db_column='estadocivil')
    licenciaconducir = models.CharField(max_length=6, db_column='licenciaconducir')
    telefonoconvencional = models.CharField(max_length=15, db_column='telefonoconvencional')
    telefonofijo = models.CharField(max_length=15, db_column='telefonofijo')
    direcciontrabajo = models.CharField(max_length=50, db_column='direcciontrabajo')
    direcciondomiciliaria = models.CharField(max_length=50, db_column='direcciondomiciliaria')
    sitioweb = models.CharField(max_length=60, db_column='sitioweb')

    # URL segura de la foto de perfil (PNG) almacenada en Azure Blob Storage.
    foto_perfil_url = models.URLField(
        blank=True,
        null=True,
        db_column='foto_perfil_url',
        help_text='URL segura de la foto de perfil almacenada en Azure (PNG)'
    )

    class Meta:
        db_table = 'DATOSPERSONALES'


class VisibilidadSecciones(models.Model):
    """Modelo para controlar la visibilidad de las secciones en el CV"""
    mostrar_experiencia_laboral = models.BooleanField(default=True, db_column='mostrar_experiencia_laboral')
    mostrar_cursos = models.BooleanField(default=True, db_column='mostrar_cursos')
    mostrar_reconocimientos = models.BooleanField(default=True, db_column='mostrar_reconocimientos')
    mostrar_productos_academicos = models.BooleanField(default=True, db_column='mostrar_productos_academicos')
    mostrar_productos_laborales = models.BooleanField(default=True, db_column='mostrar_productos_laborales')
    mostrar_venta_garage = models.BooleanField(default=True, db_column='mostrar_venta_garage')

    class Meta:
        db_table = 'VISIBILIDAD_SECCIONES'

    def __str__(self):
        return "Configuración de Visibilidad de Secciones"
