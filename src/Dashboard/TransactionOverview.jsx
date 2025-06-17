

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'; // For icons
import { FaCalendarAlt } from 'react-icons/fa'; // For calendar icon
import UserDashboardHeader from './UserDashboardHeader'; // Import your existing header component

// Inline SVGs for icons used in the dashboard table and buttons
const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308L5.438 7.5c.34.34.678.67.945 1.026A10.566 10.566 0 0 0 8 10.5c.314.075.626.155.938.243.279.088.592.176.938.269a.5.5 0 0 0 .765-.333L14.5 3.308V2h-11z"/>
    </svg>
);

const ExportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L4.354 8.354a.5.5 0 1 1-.708-.708l3-3z"/>
    </svg>
);

const DotsVerticalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
);

// Placeholder for images
const koajoLogoDark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACg/u2AAAAACXBIWXMAAA7DAAAOwwHHB6VQAAADxklEQVR4nO2by0tUURjGn+1rM8u+M2hDRESEKqFfB/0B/QUVNElJc22WkR8gqUeQIEHQQ0FBd7SJoAgR1EShQoGgljA4JjPDzM7Zl7Xn8f6Hczg/Lp2Z5z/n/s59ztnnnHvucw7bEUKICfAB9AJbwDqwC/wFPAI+J0fO6wNtwBJwG1gFLgEXgI+z67e/fS4nPgFmgaM0j+rV2e4qXgY+AT4Hjgc/a21kCzhsB6xVn3qS/VwGvgIuA+/j7vM3uV4x/gN+A34BvgCuAB/E3Vd4BtgNnAL+z2t+yJzP9c4s/Q7oR47i/Urg4uO/gBtgfWc92XmC611Z+h01d3BvAReBL4Avgl+BPwDfgQ/Z9QW2AGuA68C+gDtgK1gCLgI7O6t/d5e/v0pB+VwDvgP+AV4BHgFvAnOBz19lDrgC1gBnA/sDugJdgb3A9k7L068yJ0fBvH4eAR4BHhXu5m+zXm75P3D4eT4APvI5+30Vl6V3Wf97XgO/cZ7H32oE5W0xN/cK2eS5+222wNtgXg4/A/vB9c7e+z1W0k/Z9XbLgGbgN+wE3gCuALeBy18rDrgDWAa8D+wP6AruBe4HPn+Jc0eUvKUE9fAR4BHhEeFu/tK+Q0r4H+D+AP2rYx4C6V9lFfQ+wH9jFm+yivkNK+x/g/+A/gK62JgB22kE1+gG8+Bdg1z3gK5S3pQz18BfgEXCj3Nkv5TivpP8f/wJ8BfC1eQDAbjsA8DDAj/cAn2eAbgeU9d8f8BLweQbgLzsAYLDvDxgG/n0A1z4C8O2B+wAPAD8A/gB+AvwF8AtgDdgAnAFOAFcAPwBfAN8AvwA/APgDAPwBfAP8vj1XAE/dARy6AHwEvAG4C8Dr3wP/nJz7E/AA+A34DfgF+AvwF+AvwF+A34C/v9b6V1y2B266v7wG/gLchcAV/0H/b5f+gBvgDHgL+A34DfgF+AvwF+AvwF+A34C/v9a6X/G4AjjqDsAVwBfAN8AvwF+A34C/AHYBHgG3AGuA14BfgC/AE8DPAf8313yV/0m6qgD+AfgD8AfwD/AP4B/APwB/APwB/AP4B/AP4B/B30WADtsDAPgA+A34DfgF+AvwF+AvwF+A34C/v9e728i/K0C/A/wD8AfwD/AP4B/APwB/APwB/APwB/AP4B+BPg+BfH6gD/AP4B/APwB/APwB/APwB/APwB/APwB/APwB/Bv8WABt3X1v8APgD4A/gD4A/gD4A/gD4A/gD4A/gD4A/gD4A/gf4M/APwB/APwB/APwB/APwB/APwB/APwB/APwB/APwB/D/0wBjwF/APwB/APwB/APwB/APwB/APwB/APwB/APwB/APwB/A/0wD2/o/f/9t/APwB/APwB/APwB/APwB/APwB/APwB/APwB/APwB/D/0wAAAABJRU5ErkJggg=='; // Placeholder for dark background"
const koajoLogoLight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACg/u2AAAAACXBIWXMAA7DAAAOwwHHB6VQAAADxklEQVRYnO2by0tUUXjGn+1rM8u+M2hDRESEKqFfB/0B/QUVNElJc22WkR8gqUeQIEHQQ0FBd7SJoAgR1EShQoGgljA4JjPDzM7Zl7Xn8f6Hczg/Lp2Z5z/n/s59ztnnnHvucw7bEUKICfAB9AJbwDqwC/wFPAI+J0fO6wNtwBJwG1gFLgEXgI+z67e/fS4nPgFmgaM0j+rV2e4qXgY+AT4Hjgc/a21kCzhsB6xVn3qS/VwGvgIuA+/j7vM3uV4x/gN+A34BvgCuAB/E3Vd4BtgNnAL+z2t+yJzP9c4s/Q7oR47i/Urg4uO/gBtgfWc92XmC611Z+h01d3BvAReBL4Avgl+BPwDfgQ/Z9QW2AGuA68C+gDtgK1gCLgI7O6t/d5e/v0pB+VwDvgP+AV4BHgFvAnOBz19lDrgC1gBnA/sDugJdgb3A9k7L068yJ0fBvH4eAR4BHhXu5m+zXm75P3D4eT4APvI5+30Vl6V3Wf97XgO/cZ7H32oE5W0xN/cK2eS5+222wNtgXg4/A/vB9c7e+z1W0k/Z9XbLgGbgN+wE3gCuALeBy18rDrgDWAa8D+wP6AruBe4HPn+Jc0eUvKUE9fAR4BHhEeFu/tK+Q0r4H+D+AP2rYx4C6V9lFfQ+wH9jFm+yivkNK+x/g/+A/gK62JgB22kE1+gG8+Bdg1z3gK5S3pQz18BfgEXCj3Nkv5TivpP8f/wJ8BfC1eQDAbjsA8DDAj/cAn2eAbgeU9d8f8BLweQbgLzsAYLDvDxgG/n0A1z4C8O2B+wAPAD8A/gB+AvwF8AtgDdgAnAFOAFcAPwBfAN8AvwA/APgDAPwBfAP8vj1XAE/dARy6AHwEvAG4C8Dr3wP/nJz7E/AA+A34DfgF+AvwF+AvwF+A34C/v9b6V1y2B266v7wG/gLchcAV/0H/b5f+gBvgDHgL+A34DfgF+AvwF+AvwF+A34C/v9a6X/G4AjjqDsAVwBfAN8AvwF+A34C/AHYBHgG3AGuA14BfgC/AE8DPAf8313yV/0m6qgD+AfgD8AfwD/AP4B/APwB/APwB/AP4B/AP4B/B30WADtsDAPgA+A34DfgF+AvwF+AvwF+A34C/v9e728i/K0C/A/wD8AfwD/AP4B/APwB/APwB/APwB/AP4B+BPg+BfH6gD/AP4B/APwB/APwB/APwB/APwB/APwB/APwB/Bv8WABt3X1v8APgD4A/gD4A/gD4A/gD4A/gD4A/gD4A/gD4A/gf4M/APwB/APwB/APwB/APwB/APwB/APwB/APwB/APwB/D/0wBjwF/APwB/APwB/APwB/APwB/APwB/APwB/APwB/APwB/A/0wD2/o/f/9t/APwB/APwB/APwB/APwB/APwB/APwB/APwB/APwB/D/0wAAAABJRU5ErkJggg=="; // Logo for light background
const userProfilePic = "https://placehold.co/30x30/cccccc/000000?text=JD"; // Placeholder for user profile pic
const userAvatar = "https://placehold.co/40x40/ddd/000?text=U"; // Placeholder for group member avatars

function TransactionDashboard() {
  const transactions = [
    {
      invoice: 'BUBU2928999',
      nameBusiness: 'Koajo Premium Pod',
      dateTime: 'October 20, 2025\n01:32 PM',
      amount: '-$32.00',
      status: 'Success',
      action: '', // DotsVerticalIcon will be here
    },
    {
      invoice: '01-MMND9JXN',
      nameBusiness: 'Koajo Premium Pod',
      dateTime: 'October 24, 2025\n01:32 PM',
      amount: '-$64.00',
      status: 'Success',
      action: '',
    },
    {
      invoice: '129092N2K900',
      nameBusiness: 'Koajo Premium Pod',
      dateTime: 'November 01, 2025\n01:32 PM',
      amount: '+$100.00',
      status: 'Success',
      action: '',
    },
    {
      invoice: '19MDOIMDODO',
      nameBusiness: 'Koajo Premium Pod',
      dateTime: 'November 01, 2025\n01:32 PM',
      amount: '-$50.00',
      status: 'Success',
      action: '',
    },
    {
      invoice: '93N F03NMF3K',
      nameBusiness: 'Koajo Premium Pod',
      dateTime: 'November 08, 2025\n01:32 PM',
      amount: '-$32.00',
      status: 'pending',
      action: '',
    },
    {
      invoice: '20NR032RNR',
      nameBusiness: 'Koajo Premium Pod',
      dateTime: 'November 12, 2025\n01:32 PM',
      amount: '-$50.00',
      status: 'canceled',
      action: '',
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Assuming UserDashboardHeader.jsx is in the same directory, import it like this: */}
      {/* import UserDashboardHeader from './UserDashboardHeader'; */}
      {/* And then use it here: */}
      <UserDashboardHeader /> {/* This is where you'd use your UserDashboardHeader */}

      {/* Main Content Area */}
   

       

        {/* Search, Filter, Export Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="input-group" style={{ maxWidth: '300px' }}>
            <span className="input-group-text bg-white border-end-0 rounded-start" style={{ borderColor: '#ced4da' }}>
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              className="form-control border-start-0 rounded-end"
              placeholder="Search for transaction here"
              aria-label="Search"
            />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <FilterIcon /> Filter
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <ExportIcon /> Export
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="card bg-white text-dark rounded shadow-sm p-3">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th><input type="checkbox" className="form-check-input" /> Invoice <span className="text-muted">↓</span></th>
                  <th>Name/Business <span className="text-muted">↓</span></th>
                  <th>Date & Time <span className="text-muted">↓</span></th>
                  <th>Amount <span className="text-muted">↓</span></th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" className="form-check-input me-2" />{transaction.invoice}</td>
                    <td>{transaction.nameBusiness}</td>
                    <td>{transaction.dateTime.split('\n').map((line, i) => <div key={i}>{line}</div>)}</td>
                    <td className={transaction.amount.startsWith('-') ? 'text-danger' : 'text-success'}>{transaction.amount}</td>
                    <td>
                      <span className={`badge ${
                        transaction.status === 'Success' ? 'bg-success' :
                        transaction.status === 'pending' ? 'bg-warning text-dark' :
                        'bg-danger'
                      } bg-opacity-10 py-2 px-3 rounded-pill text-uppercase`}> {/* Adjusted badge styling */}
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-link text-secondary p-0">
                        <DotsVerticalIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination and Entries Display */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&lt;</span>
                </a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
              <li className="page-item"><a className="page-link" href="#">99</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&gt;</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="d-flex align-items-center">
            <span className="text-secondary me-2">Showing 6 of 50 entries</span>
            <select className="form-select form-select-sm w-auto">
              <option value="10">Show 10</option>
              <option value="25">Show 25</option>
              <option value="50">Show 50</option>
            </select>
          </div>
        </div>
      </div>
    
  );
}

export default TransactionDashboard;