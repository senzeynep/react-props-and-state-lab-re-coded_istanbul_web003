import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map((pet, i) => {
        return(<div>
          <Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet} />
        </div>)
      })
      }

    </div>
    }
}

export default PetBrowser;
