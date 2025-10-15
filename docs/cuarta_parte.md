## 🧩 Iconos utilizados en el proyecto

|                          Icono                          | Nombre         | Librería     |
| :-----------------------------------------------------: | :------------- | :----------- |
|      ![icon_menu](../assets/images_docs/menu.png)       | **Menu**       | Font Awesome |
|    ![icon_camera](../assets/images_docs/camara.png)     | **Camera**     | Font Awesome |
|       ![icon_add](../assets/images_docs/suma.png)       | **Add**        | Font Awesome |
|  ![icon_arrow_down](../assets/images_docs/flecha.png)   | **Arrow Down** | Font Awesome |
| ![icon_verified](../assets/images/icon_verified_48.png) | **Verified**   | icons8       |

---

### 💡 Notas

- Todos los iconos se encuentran en la carpeta:  
  `assets/images/`

## Explicacion de la implementacion de un icono

## Icono de menu

```
<FontAwesome
  name="ellipsis-v"
  size={32}
  color={Color.textPrimaryColor}
/>
```

- Ubicado en la esquina superior derecha, representa el menu de configuracion de WhatsApp.
- Se implementa en el codigo mediante la etiqueta contenedora **`FontAwesome`** de la libreria **`@expo/vector-icons`** modificando la propiedad **`name`** para elegir uno de los iconos que quieras, **`size`** para modificar su tamaño y **`color`** para cambiar su color.

[<- Volver: ](../README.md)
