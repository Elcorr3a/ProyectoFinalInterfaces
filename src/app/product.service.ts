import { Injectable } from '@angular/core';
import { Product } from './sotck-int';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  protected productList: Product[] = [
    {
      id: 1,
      name: 'Bombilla',
      description: 'Bombilla incandescente (de filamento). Formato estándar de 60W con cristal transparente. De rosca estándar (E-27)',
      price: 1.50,
      stock: 100,
      dimensions: 'd=55mm x 95mm'
  },
  {
      id: 2,
      name: 'Enchufe',
      description: 'Base de enchufe bipolar (sin toma de tierra). Diseño muy compacto. Acepta clavijas finas y gruesas (schuko) Para instalar en superficie, sin necesidad de empotrar el mecanismo en cajetín, se fija con tornillos a pared.',
      price: 6.50,
      stock: 200,
      dimensions: '65 x 65 x 30 mm'
  },
  {
      id: 3,
      name: 'Interruptor',
      description: 'Interruptor conmutado para superficie, de color grafito. De diseño muy compacto. Mecanismo conmutador (permite encender y apagar un punto de luz desde dos sitios combinados). También se puede utilizar como interruptor simple (un solo encendido/apagado). Para instalar en superficie, sin necesidad de empotrar el mecanismo en cajetín, se fija con tornillos a pared.',
      price: 4.00,
      stock: 65,
      dimensions: '65 x 65 x 30 mm'
  },
  {
      id: 5,
      name: 'Lampara',
      description: 'Lámpara LED de mesa con batería recargable por USB. Interruptor de tacto (“touch”). Con una pulsación se enciende/apaga. Se puede cambiar de color a luz cálida, neutra o fría. Manteniendo pulsado se puede regular la intensidad de la luz. Apta para interior o exterior. Ideal para hoteles, restaurantes, estudios, terrazas, camping, etc.',
      price: 19.00,
      stock: 50,
      dimensions: 'Base=9,5x9,5cm. Pantalla=d:11cm x 9,5cm. Altura total=38cm'
  },
  {
      id: 6,
      name: 'Cargador',
      description: 'Cargador para ser enchufado a 220V con 3 puertos USB de carga rápida y 1 puerto tipo "C". Válido para todo tipo de dispositivos USB (Smartphone, Palm, Cámara de fotos, reproductor música, etc.). Con sistema de protección',
      price: 6.50,
      stock: 500,
      dimensions: '91.5mm x 26.9mm x 44.7mm'
  },
  {
      id: 7,
      name: 'Estufa',
      description: 'Estufa de cuarzo con tres barras. Tres niveles de potencia. Máximo 1200W. Modelo de superficie, tipo peana, con sistema de seguridad anti-vuelvo. Emisión instantánea de calor. Reflector protegido con rejilla de seguridad.',
      price: 23.00,
      stock: 60,
      dimensions: '50,5 x 19,5 x 25,4 cm'
  },
  ]

   getAllProducts(): Product[]{
    return this.productList;
  }

  getProductById(id: number): Product | undefined{
    return this.productList.find(product => product.id === id);
  }
}
