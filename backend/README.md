# Configuración del Backend con FastAPI  

## 1. Configuración de la Base de Datos  

1. Crea una base de datos en **MySQL**.  
2. En el directorio del backend, crea un archivo **`.env`**.  
3. Agrega las siguientes claves de configuración al archivo **`.env`** con las credenciales correspondientes:  

   ```env
   MySQL_HOST=tu_host
   MySQL_USER=tu_usuario
   MySQL_PASSWORD=tu_contraseña
   MySQL_DB=tu_base_de_datos
   ```  

4. Abre una terminal en el directorio del backend y ejecuta:  

   ```sh
   python main.py
   ``` 

   Esto generará las tablas en la base de datos.  

## 2. Configuración de FastAPI  

1. (Opcional) Crea un entorno virtual:  

   ```sh
   py -3 -m venv venv
   ```  

2. Activa el entorno virtual:  

   - **Windows**:  

     ```sh
     ./venv/Scripts/activate
     ```  

   - **Linux/macOS**:  

     ```sh
     source venv/bin/activate
     ```  

3. Instala las dependencias:  

   ```sh
   pip install -r requirements.txt
   ```  

4. Inicia el servidor de desarrollo con Uvicorn:  

   ```sh
   uvicorn main:app --reload
   ```  

5. Abre tu navegador y accede a la API en:

   [http://127.0.0.1:8000](http://127.0.0.1:8000)  