'use strict';

import * as chai from 'chai';
import * as extension from '../extension';
import * as sinon from 'sinon';
import { getDocUri, activate } from './helper';

const expect = chai.expect;

describe('Check Telemetry', () => {

	const docUriXml = getDocUri('apacheCamel.xml');
	let telemetrySpy: sinon.SinonSpy;

	beforeEach(() => {
		telemetrySpy = sinon.spy(extension.telemetryService, 'send');
	});

	afterEach(() => {
		telemetrySpy.restore();
	});

	it('Check startup event and server initialization event', async () => {
		await activate(docUriXml);
		expect(telemetrySpy.calledTwice, `telemetry expected to be called 2 times but was called ${telemetrySpy.callCount} time(s).`).true;
		// improve check here
	});

});
