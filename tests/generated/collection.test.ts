import { it } from '^/tests/_helpers';
import { assertType, expect } from 'vitest';
import type { UserResponse } from '~/generated/api';

it('getCurrentUser', async ({ client }) => {
	const actual = {
		result: true,
		user: {
			_id: 2067190,
			avatar: '',
			config: {
				acknowledge: [],
				add_default_collection: -1,
				broken_level: 'default',
				default_collection_view: 'list',
				font_size: 0,
				last_collection: 43325344,
				nested_view_legacy: true,
				raindrops_buttons: ['select', 'preview', 'edit', 'remove'],
				raindrops_hide: ['list_excerpt', 'simple_excerpt', 'grid_excerpt', 'masonry_excerpt'],
				raindrops_search_by_score: true,
				raindrops_search_incollection: false,
				raindrops_sort: 'title'
			},
			email: 'miyil99106@iliken.com',
			files: {
				lastCheckPoint: '2024-04-21T06:46:01.479Z',
				size: 100000000,
				used: 73048
			},
			fullName: 'miyil99106',
			groups: [
				{
					collections: [43450397],
					hidden: false,
					sort: -1,
					title: 'Collections'
				}
			],
			lastAction: '2024-04-21T08:38:11.397Z',
			lastUpdate: '2024-04-24T11:21:42.865Z',
			lastVisit: '2024-04-24T11:21:42.865Z',
			name: 'miyil99106',
			password: true,
			pro: false,
			registered: '2024-04-21T06:46:01.480Z',
			tfa: {
				enabled: false
			}
		}
	};
	assertType<UserResponse>(actual);

	const response = await client.user.getCurrentUser();
	expect(response.data).toEqual(actual);
});
