/**
 * Contract source: https://git.io/Jte3v
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import { actions } from '../start/bouncer'

declare module '@ioc:Adonis/Addons/Bouncer' {
	type ApplicationActions = ExtractActionsTypes<typeof actions>	

	interface ActionsList extends ApplicationActions {}	
}
