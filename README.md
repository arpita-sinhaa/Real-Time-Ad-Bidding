# Real-Time-Ad-Bidding
Real-time ad bidding optimization system using ML predictions (CTR , CVR), along with dashboard.

BidWit: 
BidWit is a real-time ad bidding simulator that integrates an AI model to predict key metrics like Click-Through Rate (CTR) and Conversion Rate (CVR). It provides a user-friendly dashboard to simulate bidding behavior, monitor outcomes, and visualize performance trends.

Overview
The goal of BidWit is to help users simulate and visualize how real-time bidding might work in programmatic advertising. The tool incorporates a machine learning model to analyze incoming data, predict CTR and CVR, and determine whether a bid would be won or lost. The frontend is designed to reflect these events live, with interactive graphs, tables, and logs.

Features
1. Real-time simulation toggle
2. File upload support (CSV/JSON)
3. N-Factor adjustment slider for model behavior
4. AI-powered predictions of CTR and CVR
5. Line graph for CTR/CVR trends
6. Donut chart for budget usage
7. Dynamic table showing recent bids and their results
8. Live console log with system updates every 2 seconds

Tech Stack
1. Frontend: React, Vite, Tailwind CSS
2. Charts: Recharts
3. Model Integration: Python-based machine learning model (communicating via API)

How to Run
 npm install
 npm run dev



