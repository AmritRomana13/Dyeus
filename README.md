# Dyeus

I didn't view the complete codebase, I just saw this assignment 20 minutes before and I am sharing the code upto my understanding.I have mentioned the comments between the code segments, please refer to Dashboard.js.


<==============================>


The steps involved for the above would be :

Download the codebase from the provided link and extract the files to a local directory of computer.

Open a terminal window and navigate to the root directory of the project.

Run the command yarn to install the required dependencies for the project.

Run the command yarn start to start the development server. This should open the bomb-frontend homepage in the default web browser at http://localhost:3000/.

Install and set up the Metamask extension on the web browser.

One can visit the Farm, Boardroom, and Bond pages to see where the values for the other elements in the UI are coming from.

To build the dashboard on the "/dashboard" route, we can create a new file in the "src/pages" directory called "Dashboard.js" and write the code for the dashboard in this file. We can reuse the existing code from the original repository to display the data and run functions on user interaction in the new UI design.

Be sure to call the correct functions from the correct parts, and avoid mixing up the claim and withdraw functions for different features.

After cloning the repository, delete the old ".git" folder and start a new Git repository. 

If we encounter any errors while working on the project, we can try deleting the "node_modules", "yarn.lock", and "package-lock.json" files, running the command "yarn cache clean", and then re-installing the packages using "yarn". This should resolve the error.





<========================================>


Import the Dashboard.js for using it as a root component :

import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;


