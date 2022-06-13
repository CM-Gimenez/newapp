import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import minimum from '../components/Themes/minimum.module.scss'
import baseClasses from './layout.module.scss'

const Dashboard: FunctionComponent = (props: any) => {
  const classes = baseClasses
  const [lang, setlang] = React.useState<any>('en')
  const theme = minimum

  // Theme selection

  React.useEffect(() => {
    if (typeof langStrings !== 'undefined') {
      setlang(langStrings[localStorage.getItem('aptugolang') || 'en'])
    }
  }, [])

  return (
    <React.Fragment>
      <div className={theme.pages}>
        <Sidebar color="Greens" open={true}>
          <NavLink exact to="/" key="SvFDpdul">
            <ListItem button className={classes.itemLink}>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavLink>
        </Sidebar>
        <div title="Main Area" className={theme.mainarea}>
          <div title="div - Hello Text" className={classes.bigHello}>
            <Typography variant="h1">Hello!</Typography>

            <Typography variant="body1">I'm your Aptugo application</Typography>

            <span>(you can edit me at the Page Manager)</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
