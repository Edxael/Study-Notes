import React from 'react';
import Individual from './Individual.jsx';
let data = require('./data/senators.json');

class DannyWay extends React.Component {
  render() {
      console.log(data);
    return(
      <div>

        <div>
          <h2>Democrats</h2>

            {data
              .filter((senator) => { return senator.party === "Democrat" })
              .map((senator) => { return(
                <Individual info={
                    {
                      name: `${ senator.person.firstname } ${ senator.person.lastname }`,
                      state: senator.state,
                      bday: senator.person.birthday
                    }
                   }  />
              )


              })}

        </div>

        <br/><br/>

          <div>
            <h2>Republican</h2>

              {data
                .filter((senator) => { return senator.party !== "Democrat" })
                .map((senator) => { return(
                  <Individual info={
                      {
                        name: `${ senator.person.firstname } ${ senator.person.lastname }`,
                        state: senator.state,
                        bday: senator.person.birthday
                      }
                     }  />
                )


                })}

          </div>

      </div>
    )
  }
}

export default DannyWay;

<Individual />
