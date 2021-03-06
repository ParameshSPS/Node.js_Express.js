const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Sign in</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input required class="input" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <a href="/signup">Need an account? Sign Up</a>
          </div>
        </div>
      </div>
    `
  });
};

/*
const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
            <div>
                <form method="POST">
                    <input name="email" placeholder="Email" />
                    ${getError(errors, 'email')}
                    <input name="password" placeholder="Password" />
                    ${getError(errors, 'password')}
                    <button>Sign In</button>
                </form>
            </div>
        `
    });  
};
*/