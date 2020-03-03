import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

//boilerplate material ui styling for collapsible drawer
 const UseStyles = makeStyles((theme: Theme) =>
 createStyles({
   root: {
     display: 'flex',
   },
   appBar: {
     zIndex: theme.zIndex.drawer + 1,
   },
   drawer: {
     width: 240,
     flexShrink: 0,
   },
   drawerPaper: {
     width: 240,
   },
   content: {
     flexGrow: 1,
     padding: theme.spacing(3),
   },
   toolbar: theme.mixins.toolbar,
 }),
);



    
export default UseStyles;