import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';

export function DialogComponent({ open, handleOpen }) {
  return (
    <Dialog open={open} handler={handleOpen} className="overflow-auto">
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div >
          <DialogHeader>It's a simple dialog</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this way,
            it took me twenty five years to get these plants, twenty five years of
            blood sweat and tears, and I'm never giving up, I'm just getting
            started. I'm up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </div>
      </div>
    </Dialog>
  );
}
