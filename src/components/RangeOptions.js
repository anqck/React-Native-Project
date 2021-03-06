import { ActionSheet } from 'native-base';
import Colors from '../constants/Colors';
import { RANGE_OPTIONS } from '../constants/RangeOptions';

/**
 * Shows an @type {ActionSheet} of all the range options.
 * The current selected index will have a checkmark rendered.
 * @param {number} currentIndex
 * @param {function(number): void} callback
 */
const showRangeOptions = (currentIndex, callback) => {
  // Generate new range options, where
  // only selected one has a check mark.
  const options = [];
  for (i = 0; i < RANGE_OPTIONS.length; i++) {
    // re-create one option
    let option = {};
    // set that one's text = old one
    const optionText = RANGE_OPTIONS[i];
    option['text'] = optionText;
    // if is selected one, set icon to
    // check mark and set color
    if (currentIndex == i) {
      option['icon'] = 'checkmark';
      option['iconColor'] = Colors.tintColor;
    }
    // push back to new option array
    options.push(option);
  }

  // show action sheet using newly created options
  ActionSheet.show(
    {
      options: options,
      title: 'Range to notify',
    },
    (selectedIndex) => {
      if (callback) {
        callback(selectedIndex);
      }
    }
  );
};

export default showRangeOptions;
