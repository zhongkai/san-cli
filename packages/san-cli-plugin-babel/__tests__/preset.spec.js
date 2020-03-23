/**
 * @file preset test
 * @author yanyiting <yanyiting@baidu.com>
 */

import preset from '../preset';

test('默认值', () => {
    const presets = preset().presets;
    expect(presets[0][1]).toEqual({
        debug: false,
        loose: false,
        ignoreBrowserslistConfig: undefined,
        useBuiltIns: 'usage',
        corejs: 3,
        targets: undefined,
        modules: false
    });
});

test('添加 plugin', () => {
    const plugins = preset({plugins: [{id: 'a'}]}).plugins;
    expect(plugins.length).toBe(7);
});
