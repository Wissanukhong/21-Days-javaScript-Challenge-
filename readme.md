# 21 Days JavaScript Challenge
## Day 1 Falling Snow
### สิ่งที่ได้เรียนรู้  
### HTML
- Element canvas [html] สามารถวาดรูปได้ตามที่เราต้องการ

### CSS
```css
body {
    background-image: url('link ภาพที่เราต้องการ');
    background-size: cover;
}
```
* background-image //ตั้งค่าภาพพื้นหลังตามที่เราต้องการ  
* background-size: cover; //ตั้งค่าให้ภาพพื้นหลังเต็มหน้าจอของ Element นั้นๆ  

### javascript
- Function
- Destructuring 
- spead operator
- map
- .beginPath() เพื่อที่จะบอกโปรแกรมว่า เราจะเริ่มวาด Snowballs Function นี้นะ
- arc(snowBall.x, snowBall.y, 4, 0, Math.PI *2) Function สำหรับวาดรูปวงกลมโดยมีค่าดังต่อไปนี้ 
ค่าตัวที่ 1 รับค่าพิกัด x
ค่าตัวที่ 2 รับค่าพิกัด y
ค่าตัวที่ 3 ขนาดของรูปวงกลม
ค่าตัวที่ 4 องศาเริ่มต้น
ค่าตัวที่ 5 องศาสิ้นสุด (Math.PI * 2 เพื่อที่จะให้เป็นวงกลม)
