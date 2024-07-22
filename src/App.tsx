import { useEffect, useRef, useState } from 'react';
import './App.css';
import { SuperFabric } from 'super-fabric';
import { Accordion, AccordionDetails, AccordionSummary, Button, Drawer, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditDimensionsComponent from './components/editDimension/editDimension';
import CloseIcon from '@mui/icons-material/Close';
import SaveComponent from './components/save/save';
import CustomCompent from './components/custom/custom';

export default function App() {
  const superfabric = useRef<SuperFabric | undefined>(undefined);

  useEffect(() => {
    SuperFabric.initialize('superfabric').then((superf) => {
      superfabric.current = superf;
    }).catch((err) => {
      console.error('error on initialize SuperFabric: ', err);
    })
  }, []);

  const [showDrawer, setShowDrawer] = useState(false);

  const editors: { header: string, component: JSX.Element }[] = [
    { header: 'Save/Open', component: <SaveComponent superfabric={superfabric.current}></SaveComponent> },
    { header: 'Custom', component: <CustomCompent superfabric={superfabric.current}></CustomCompent> },
    { header: 'Dimensions', component: <EditDimensionsComponent superfabric={superfabric.current}></EditDimensionsComponent> }
  ];

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#788f8b21' }}>
      <div className='button'>
        <Button onClick={() => setShowDrawer(true)} variant="outlined">
          Open editors
        </Button>
      </div>

      <div className='container'>
        <div id='superfabric' className='container-superfabric'></div>
      </div>

      <Drawer open={showDrawer} variant="persistent" anchor='right'>
        <div className='button'>
          <Button onClick={() => setShowDrawer(false)} variant="outlined" endIcon={< CloseIcon />}>
            Close
          </Button>
        </div>
        <div style={{ width: '400px' }}>
          {
            editors.map((editor, index) => {
              const content =
                <Accordion key={'accordion' + index}>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id={'editor' + index}
                  >
                    <Typography>{editor.header}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {editor.component}
                  </AccordionDetails>
                </Accordion>

              return content
            })
          }
        </div>
      </Drawer>
    </div>
  )
}
