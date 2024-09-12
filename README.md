Hi! I'm Anya and this is my Blockhouse project submission. I enjoyed working on this project and
getting the chance to learn Django. I would also greatly appreciate any input on how I can improve
my work. Thank you!

---

INSTRUCTIONS

1. git clone https://github.com/anyagchan/blockhouseCharts.git

2. Front-end Next.js (blockhouse)

- cd ../blockhouse
- npm install

3. Back-end Django API (blockhouseApi)

- cd ../blockhouseApi
- python -m venv venv
- source venv/bin/activate
- pip install -r requirements.txt
- pip install django djangorestframework
- python manage.py migrate

4. Install libraries (listed below)

5. Run

- cd ../blockhouse
- npm run dev
- cd ../blockhouseApi
- python manage.py runserver

---

LIBRARIES

- react
- axios
- chart.js
- react-chartjs-2
- react-apexcharts apexcharts

---

APPROACH

1. Start Next.js app: I decided to challenge myself by using Typescript since I used React with Next.js in the past so I needed to get used to the syntax and worked on setting up my page (adding a header then grids for the charts).

2. Start Django: I never worked with Django before so I needed to read documentation on how to use it, but my experience working on backend before made it relatively straightforward. I was able to fix the API and get it working.

3. Next.js Charts: I decided to use Charts.js and the documentation was relatively easy to follow for the Pie, Line, and Bar Charts. I found a Candlestick Chart on Charts.js but struggled to implement it (there wasn't a lot of available documentation either). I ended up using Apex chart's model instead and tried to design it such that it was uniform to the rest of my charts.

4. Responsiveness and Design: I enjoyed changing around the sizes of the charts and working on improving the design of my page. I tried my best to make the charts responsive to screen size changes as well.
