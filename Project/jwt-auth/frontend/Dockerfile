# ใช้ node image
FROM node:16

# ตั้งค่าทำงานใน directory ของ container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package.json package-lock.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ source ทั้งหมด
COPY . .

# สร้างไฟล์ production build
# RUN npm run build

# ใช้ nginx เพื่อเสิร์ฟไฟล์จาก dist folder
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# เปิดพอร์ตที่ nginx ใช้
EXPOSE 80

# เริ่ม nginx
CMD ["nginx", "-g", "daemon off;"]
