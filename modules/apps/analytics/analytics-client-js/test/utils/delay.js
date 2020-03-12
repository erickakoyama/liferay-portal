/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

import {getRetryDelay} from '../../src/utils/delay';

describe('getRetryDelay', () => {
	it('returns a delay as a function of attempt number and min/max delay', () => {
		const min = 1000;
		const max = 30000;

		expect(getRetryDelay(1, min, max)).toEqual(2000);
		expect(getRetryDelay(2, min, max)).toEqual(4000);
		expect(getRetryDelay(30, min, max)).toEqual(max);
	});
});
