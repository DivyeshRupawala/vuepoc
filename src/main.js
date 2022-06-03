import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 20,
        data: [
            {"id": 100, "FIRST_NAME": "Steven","LAST_NAME": "King", "EMAIL": "SKING", "PHONE_NUMBER": "515.123.4567", "HIRE_DATE": "1987-06-17", "SALARY": 24000, "DEPARTMENT_ID": 90, "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/10.png"},
            { "id": 101, "FIRST_NAME": "Neena", "LAST_NAME": "Kochhar", "EMAIL": "NKOCHHAR", "PHONE_NUMBER": "515.123.4568", "HIRE_DATE": "1989-09-21", "SALARY": 17000, "DEPARTMENT_ID": 90, "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/2.png" },
            {
                "id": 102,
                "FIRST_NAME": "Lex",
                "LAST_NAME": "De Haan",
                "EMAIL": "LDEHAAN",
                "PHONE_NUMBER": "515.123.4569",
                "HIRE_DATE": "1993-01-13",
                "SALARY": 17000,
                "DEPARTMENT_ID": 90,
                "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/3.png"
            },
            {
            "id": 103,
            "FIRST_NAME": "Alexander",
            "LAST_NAME": "Hunold",
            "EMAIL": "AHUNOLD",
            "PHONE_NUMBER": "590.423.4567",
            "HIRE_DATE": "1990-01-03",
            "SALARY": 9000,
            "DEPARTMENT_ID": 60,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/15.png"
            },
            {
            "id": 105,
            "FIRST_NAME": "David",
            "LAST_NAME": "Austin",
            "EMAIL": "DAUSTIN",
            "PHONE_NUMBER": "590.423.4569",
            "HIRE_DATE": "1997-06-25",
            "SALARY": 4800,
            "DEPARTMENT_ID": 60,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/6.png"
            },
            {
            "id": 106,
            "FIRST_NAME": "Valli",
            "LAST_NAME": "Pataballa",
            "EMAIL": "VPATABAL",
            "PHONE_NUMBER": "590.423.4560",
            "HIRE_DATE": "1998-02-05",
            "SALARY": 4800,
            "DEPARTMENT_ID": 60,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/7.png"
            },
            {
            "id": 107,
            "FIRST_NAME": "Diana",
            "LAST_NAME": "Lorentz",
            "EMAIL": "DLORENTZ",
            "PHONE_NUMBER": "590.423.5567",
            "HIRE_DATE": "1999-02-07",
            "SALARY": 4200,
            "DEPARTMENT_ID": 60,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/7.png"
            },
            {
            "id": 108,
            "FIRST_NAME": "Nancy",
            "LAST_NAME": "Greenberg",
            "EMAIL": "NGREENBE",
            "PHONE_NUMBER": "515.124.4569",
            "HIRE_DATE": "1994-08-17",
            "SALARY": 12000,
            "DEPARTMENT_ID": 100,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/8.png"
            },
            {
            "id": 109,
            "FIRST_NAME": "Daniel",
            "LAST_NAME": "Faviet",
            "EMAIL": "DFAVIET",
            "PHONE_NUMBER": "515.124.4169",
            "HIRE_DATE": "1994-08-17",
            "SALARY": 9000,
            "DEPARTMENT_ID": 100,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/17.png"
            },
            {
            "id": 110,
            "FIRST_NAME": "John",
            "LAST_NAME": "Chen",
            "EMAIL": "JCHEN",
            "PHONE_NUMBER": "515.124.4269",
            "HIRE_DATE": "1997-09-28",
            "SALARY": 8200,
            "DEPARTMENT_ID": 100,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/10.png"
            },
            {
            "id": 111,
            "FIRST_NAME": "Ismael",
            "LAST_NAME": "Sciarra",
            "EMAIL": "ISCIARRA",
            "PHONE_NUMBER": "515.124.4369",
            "HIRE_DATE": "1997-09-30",
            "SALARY": 7700,
            "DEPARTMENT_ID": 100,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/11.png"
            },
            {
            "id": 112,
            "FIRST_NAME": "Jose Manuel",
            "LAST_NAME": "Urman",
            "EMAIL": "JMURMAN",
            "PHONE_NUMBER": "515.124.4469",
            "HIRE_DATE": "1998-03-07",
            "SALARY": 7800,
            "DEPARTMENT_ID": 100,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/12.png"
            },
            {
            "id": 113,
            "FIRST_NAME": "Luis",
            "LAST_NAME": "Popp",
            "EMAIL": "LPOPP",
            "PHONE_NUMBER": "515.124.4567",
            "HIRE_DATE": "1999-12-07",
            "SALARY": 6900,
            "DEPARTMENT_ID": 100,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/13.png"
            },
            {
            "id": 114,
            "FIRST_NAME": "Den",
            "LAST_NAME": "Raphaely",
            "EMAIL": "DRAPHEAL",
            "PHONE_NUMBER": "515.127.4561",
            "HIRE_DATE": "1994-12-07",
            "SALARY": 11000,
            "DEPARTMENT_ID": 30,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/14.png"
            },
            {
            "id": 115,
            "FIRST_NAME": "Alexander",
            "LAST_NAME": "Khoo",
            "EMAIL": "AKHOO",
            "PHONE_NUMBER": "515.127.4562",
            "HIRE_DATE": "1995-05-18",
            "SALARY": 3100,
            "DEPARTMENT_ID": 30,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/15.png"
            },
            {
            "id": 116,
            "FIRST_NAME": "Shelli",
            "LAST_NAME": "Baida",
            "EMAIL": "SBAIDA",
            "PHONE_NUMBER": "515.127.4563",
            "HIRE_DATE": "1997-12-24",
            "SALARY": 2900,
            "DEPARTMENT_ID": 30,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/6.png"
            },
            {
            "id": 117,
            "FIRST_NAME": "Sigal",
            "LAST_NAME": "Tobias",
            "EMAIL": "STOBIAS",
            "PHONE_NUMBER": "515.127.4564",
            "HIRE_DATE": "1997-07-24",
            "SALARY": 2800,
            "DEPARTMENT_ID": 30,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/17.png"
            },
            {
            "id": 118,
            "FIRST_NAME": "Guy",
            "LAST_NAME": "Himuro",
            "EMAIL": "GHIMURO",
            "PHONE_NUMBER": "515.127.4565",
            "HIRE_DATE": "1998-11-15",
            "SALARY": 2600,
            "DEPARTMENT_ID": 30,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/18.png"
            },
            {
            "id": 119,
            "FIRST_NAME": "Karen",
            "LAST_NAME": "Colmenares",
            "EMAIL": "KCOLMENA",
            "PHONE_NUMBER": "515.127.4566",
            "HIRE_DATE": "1999-08-10",
            "SALARY": 2500,
            "DEPARTMENT_ID": 30,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/9.png"
            },
            {
            "id": 120,
            "FIRST_NAME": "Matthew",
            "LAST_NAME": "Weiss",
            "EMAIL": "MWEISS",
            "PHONE_NUMBER": "650.123.1234",
            "HIRE_DATE": "1996-07-18",
            "SALARY": 8000,
            "DEPARTMENT_ID": 50,
            "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/14.png"
            }
          ],
          gridColumns: ['id', 'FIRST_NAME', 'LAST_NAME', 'EMAIL', 'PHONE_NUMBER', 'HIRE_DATE', 'SALARY', 'DEPARTMENT_ID', 'Image'],        
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

const app = createApp(App);
//createApp(App).mount("#app");
app.use(store).mount("#app");
// store.commit('increment')