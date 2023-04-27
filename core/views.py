from django.http import JsonResponse
from django.shortcuts import render

def index(request):

    if request.method == "GET":
        return render(request, "index.html")
    else:

        try:
            resposta = round(eval(request.POST.get('equacao').replace("÷","/").replace(r"%",r"/100")),6)
        except Exception as e:
            resposta = "Equação não é válida!"

        context = {
            'resposta': str(resposta)
        }

        print(context)

        return JsonResponse(context)

