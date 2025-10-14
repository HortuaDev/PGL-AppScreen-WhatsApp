## 🧩 Iconos utilizados en el proyecto

|                            Icono                            | Nombre         | Descripción                                                       | Implementación                                                                                                                                                 |
| :---------------------------------------------------------: | :------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       ![icon_menu](../assets/images/icon_menu_48.png)       | **Menu**       | Representa un menú lateral o un conjunto de opciones.             | `<Image style={styles.icon} source={require("../../assets/images/icon_menu_48.png")} />`                                                                       |
|     ![icon_camera](../assets/images/icon_camera_48.png)     | **Camera**     | Representa la acción de tomar una foto o abrir la cámara.         | `<Image style={styles.icon} source={require("../../assets/images/icon_camera_48.png")} />`                                                                     |
|        ![icon_add](../assets/images/icon_add_48.png)        | **Add**        | Representa la acción de agregar o crear algo nuevo.               | `<Image source={require("../../assets/images/icon_add_48.png")} style={styles.iconChannel} />`                                                                 |
| ![icon_arrow_down](../assets/images/icon_arrow_down_48.png) | **Arrow Down** | Indica que un elemento puede desplegarse o mostrar más contenido. | `<Image style={styles.iconView} source={require("../../assets/images/icon_arrow_down_48.png")} />`                                                             |
|   ![icon_verified](../assets/images/icon_verified_48.png)   | **Verified**   | Indica que un usuario o canal está verificado.                    | `<View style={styles.CardVerifiedIconContainer}><Image source={require("../../assets/images/icon_verified_48.png")} style={styles.CardVerifiedIcon} /></View>` |

---

### 💡 Notas

- Todos los iconos se encuentran en la carpeta:  
  `assets/images/`
- Se implementan mediante el componente **`Image`** de React Native, usando la propiedad **`require()`** para importar los archivos locales.
- Cada icono utiliza un estilo diferente según su contexto (`styles.icon`, `styles.iconChannel`, etc.).
