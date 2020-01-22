import 'jest';
import { getLatestSpec } from '@fmtk/cfnspec';
import { normaliseSpec } from './normaliseSpec';

describe('normaliseSpec', () => {
  it('passes the smoke test', async () => {
    const spec = await getLatestSpec();
    const norm = normaliseSpec(spec);

    expect(norm).toBeTruthy();
  });
});
