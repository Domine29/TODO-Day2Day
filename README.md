# TODO APP - Day2Day
- Fullstack application for mobile with the stretch goal of making it responsive depending on the user's device. 
- The App will allow users to `create` new tasks, `update` existing tasks, `delete` a task/set of tasks, and `read` both pending and/or completed task.


## Tech Stack:
<hr>
<br>
<ul>
  <li style="display: flex; flex-direction: row; gap: 2%">FRONTEND: 
  
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 

  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

  </li>
  <br>
  <li style="display: flex; flex-direction: row; gap: 5%">BACKEND: 
  
  ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)

  ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)

  ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
  
  
  </li>
  <br>
  <li style="display: flex; flex-direction: row; gap: 5%">TESTING: 
  
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  
  </li>
</ul>

## Implementation:
<hr>
<ul>
  <li>React/TS: Layout content</li>
  <li>CSS: Style Content</li>
  <li>Django/Python: API interaction with PostgreSQL Database</li>
  <li>JEST: Testing framework to conduct Test-Driven Development</li>
</ul>





## Design
<hr>
<br>
<div style="display: flex; flex-direction: row; gap: 20%">

[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/q1PYbTKZ1CQOQvGb16IK38/TODO-APP%3A-Day2Day?node-id=0%3A1&t=BWuMEj85NsxbTqRn-1)

![figma_design](TODO%20APP.svg)

</div>

## Database Schema
<hr>
<br>

![db_schema](todo_db_schema.png)

- A USER will have a First Name and Last Name and a Profile Picture that can be left blank. 
- A USER can have many (one-to-may relationship) TASKs
- A TASK will have a Title, a Date when it was created, and a Completed status that is defaulted to `false` (i.e. "Pending")



## License
<hr>

[![License](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

