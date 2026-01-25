from django.contrib import admin, messages
from django.utils.translation import gettext_lazy as _
from .models import (
    ExperienciaLaboral,
    Reconocimiento,
    CursoRealizado,
    ProductoAcademico,
    ProductoLaboral,
    VentaGarage,
)
from .forms_admin import CursoRealizadoAdminForm, ReconocimientoAdminForm, ExperienciaLaboralAdminForm
from .services.azure_storage import upload_pdf


@admin.register(ExperienciaLaboral)
class ExperienciaLaboralAdmin(admin.ModelAdmin):
    form = ExperienciaLaboralAdminForm
    list_display = ('cargodesempenado', 'nombrempresa', 'fechainiciogestion', 'fechafingestion', 'activarparaqueseveaenfront')

    def save_model(self, request, obj, form, change):
        uploaded = form.cleaned_data.get('certificado_subir')
        if uploaded:
            try:
                url = upload_pdf(uploaded, filename=uploaded.name)
                obj.rutacertificado = url
            except Exception as exc:
                messages.error(request, f'Error al subir a Azure: {exc}')
        super().save_model(request, obj, form, change)


@admin.register(Reconocimiento)
class ReconocimientoAdmin(admin.ModelAdmin):
    form = ReconocimientoAdminForm
    list_display = ('descripcionreconocimiento', 'fechareconocimiento', 'activarparaqueseveaenfront')

    def save_model(self, request, obj, form, change):
        # If a file was uploaded, send to Azure and save URL
        uploaded = form.cleaned_data.get('certificado_subir')
        if uploaded:
            url = upload_pdf(uploaded, filename=uploaded.name)
            obj.rutacertificado = url
        super().save_model(request, obj, form, change)


@admin.register(CursoRealizado)
class CursoRealizadoAdmin(admin.ModelAdmin):
    form = CursoRealizadoAdminForm
    list_display = ('nombrecurso', 'fechainicio', 'fechafin', 'activarparaqueseveaenfront')

    def save_model(self, request, obj, form, change):
        uploaded = form.cleaned_data.get('certificado_subir')
        if uploaded:
            try:
                url = upload_pdf(uploaded, filename=uploaded.name)
                obj.rutacertificado = url
            except Exception as exc:
                messages.error(request, f'Error al subir a Azure: {exc}')
        super().save_model(request, obj, form, change)


@admin.register(ProductoAcademico)
class ProductoAcademicoAdmin(admin.ModelAdmin):
    list_display = ('nombrerecurso', 'activarparaqueseveaenfront')


@admin.register(ProductoLaboral)
class ProductoLaboralAdmin(admin.ModelAdmin):
    list_display = ('nombreproducto', 'fechaproducto', 'activarparaqueseveaenfront')


@admin.register(VentaGarage)
class VentaGarageAdmin(admin.ModelAdmin):
    list_display = ('nombreproducto', 'disponibilidad', 'fecha_publicacion', 'activarparaqueseveaenfront')
    readonly_fields = ('fecha_publicacion',)
