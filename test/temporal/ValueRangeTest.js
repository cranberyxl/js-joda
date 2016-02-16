/**
 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
import {expect} from 'chai';
import {ValueRange} from '../../src/temporal/ValueRange';

describe('ValueRange', () => {

    it('should define a min/ max ValueRange', () => {
        var minMaxValueRange = ValueRange.of(1,12);

        expect(minMaxValueRange.isValidValue(0)).to.equal(false);
        expect(minMaxValueRange.isValidValue(2)).to.equal(true);
        expect(minMaxValueRange.isValidValue(10)).to.equal(true);
        expect(minMaxValueRange.isValidValue(13)).to.equal(false);

        expect(minMaxValueRange.checkValidValue(10)).to.be.undefined;

    });


    // TODO tests missing

});