command -v python3 >/dev/null 2>&1 || { echo >&2 "python3 is not installed.  Aborting."; exit 1; } # Verificar si el comando existe (valido ubuntu)
dpkg-query -l python3-venv > /dev/null 2>&1 || { echo >&2 "python3-venv is not installed. Aborting.";exit 1;} # Verificar si un paquete esta instalado (valido Ubuntu)
python3 -m venv . # Crear entorno virtual en carpeta actual
source bin/activate # Activar entorno virtual
pip install --upgrade pip # Actualiza pip
pip3 install -r requirements.txt # Instala la lista de librerias especificadas en el archivo requeriments