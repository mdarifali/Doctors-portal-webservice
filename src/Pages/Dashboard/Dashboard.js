import React from 'react';

const Dashboard = () => {

  return (
    <div class="drawer drawer-mobile py-12">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content m-10">
        <table class="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-gray-200 text-base-content">
          <li>Appointment History</li>
          <li>All Users</li>
          <li>Update Data</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;