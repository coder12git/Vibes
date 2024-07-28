<div align='center'>
   

![Screenshot 2024-07-28 190458](https://github.com/user-attachments/assets/17ed695f-f705-4047-b970-cb2c6c57c436)



<br>

![logo](https://github.com/user-attachments/assets/5d3fdc55-2f72-4ec2-87cd-29c4cfdf6e43)

A full stack web application where users can create and join rooms to discuss any topics, engage in discussions, and can read trending articles, all without disclosing their real identity.

Watch Demo Video - <a href='https://youtu.be/P-IykV3HPWg?si=4EqMGDynZ-RFg30I'>Click here</a>
   
</div>

## Project Overview

Vibes is a full-stack web application built with the *MERN* stack. Users can create and join rooms to discuss any topics and read trending articles without revealing their identity. This platform is perfect for shy or introverted individuals who want to express themselves freely and anonymously. Vibes provides a safe, open environment to talk about your concerns without the fear of being identified.

## How it works?
1. Registration and OTP Verification

- User provides their phone number or email.
- Our app sends an OTP which the user must enter in the next step.
2. Profile Setup

- After OTP verification, the user provides a public name and an avatar for their profile.
3. Main Page

- Once setup is complete, the user is redirected to the main page.
- Users can join any room to participate in topic discussions.
4. Creating a Room

- Users can create a room by clicking on the Start a room button.
- They enter the topic to be discussed and select the room type, which is open (public) by default.
5. Reading Articles

- Users can read trending articles on the articles page.
6. Logging Out

- Users can log out from the app via the log out button.


# Technology Stack Used:

- ReactJS - For building the frontend of our web application
- Express and Node.JS - For building the backend of our web application
- MongoDB - For Database
- WebRTC and Socket.IO - Integrated to enable real-time voice room features, allowing seamless communication between the (backend) server and the (frontend) client.

<div align='center'>

<h2>Screenshots</h2>

![Screenshot 2024-07-28 190320](https://github.com/user-attachments/assets/2bc365ce-9ac5-492a-a95a-1e16169c3f0d)

![Screenshot 2024-07-28 190341](https://github.com/user-attachments/assets/ec55a83e-8dbf-45cc-92bc-af2204f32841)


![Screenshot 2024-07-28 190358](https://github.com/user-attachments/assets/be9390dc-bbd1-4621-ae11-1c1357c2e770)


![Screenshot 2024-07-28 190435](https://github.com/user-attachments/assets/b1146de0-66b3-4dd0-8398-cba476387025)

![Screenshot 2024-07-28 191433](https://github.com/user-attachments/assets/dc1d766f-c128-4320-8230-df77b1d14682)

![Screenshot 2024-07-28 191506](https://github.com/user-attachments/assets/3ccbd9d3-8a43-4f58-850e-639370656405)

![Screenshot 2024-07-28 190458](https://github.com/user-attachments/assets/4761645f-44ac-40a6-aa78-b52b098f1697)


![Screenshot 2024-07-28 190533](https://github.com/user-attachments/assets/c9710be7-5d28-4d61-99b4-b89035a7f0e3)


![Screenshot 2024-07-28 190603](https://github.com/user-attachments/assets/e9a7f491-3479-4994-a4f9-2a6219c356a4)

![Screenshot 2024-07-28 190616](https://github.com/user-attachments/assets/9034e0db-e689-45c9-9977-b6f1f651ae90)

![Screenshot 2024-07-28 190945](https://github.com/user-attachments/assets/e7f1aede-2b1a-4915-a1aa-3b170ce3cc58)

![Screenshot 2024-07-28 191025](https://github.com/user-attachments/assets/afaf7e9e-71b5-488f-8592-b4ca77cd8ae8)


![Screenshot 2024-07-28 191038](https://github.com/user-attachments/assets/92721962-e869-41e6-9463-e3e9844695e0)


![Screenshot 2024-07-28 191051](https://github.com/user-attachments/assets/360bed83-2436-46d9-b7a3-33765e920c6c)


















<h2>Demo Video</h2>





https://github.com/user-attachments/assets/ccb31bf1-8427-4b2a-826a-0a07d30ce719




</div>

## Setting up Local Development

1. Clone the repository

```
git clone https://github.com/coder12git/Vibes.git
```

2. Navigate to the project folder

```
cd Vibes/
```

3. Navigate to the backend folder

```
cd backend/
```

4. Change the config.env file in the backend folder to .env and paste the below lines.

 > HASH_SECRET = 'ee66646048d85bdc534912d9ee8cb31a3e680d963c9889ed009ab2f9d1ef7990da7dfdbaa480fccefd4d755325705186c1446b79e420b01027aaa7e1f747a741'


 > DB_URL = 'mongodb://localhost:27017/sympathy'

6. Once done, Install dependencies 

```
npm i
```

6. Start the backend server

 ```bash
npm start
 ```

7. Open another terminal and navigate to frontend folder

```bash
cd frontend/
```

8. Install dependencies
```bash
npm i
```   

9. Start the frontend server
```bash
npm start
```

After following the above steps successfully, your frontend will be live and running at `http://localhost:3000/` and your backend server will be live and running at `http://localhost:4000/`. 

<hr/>

<div align='center'>
  <h3>Thanks for visiting!</h3>
</div>
