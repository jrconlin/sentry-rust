initSidebarItems({"enum":[["Level","Represents the level of severity of an event or breadcrumb."]],"fn":[["add_breadcrumb","Records a breadcrumb by calling a function."],["capture_error","Captures a `std::error::Error`."],["capture_event","Captures an event on the currently active client if any."],["capture_message","Captures an arbitrary message."],["configure_scope","Invokes a function that can modify the current scope."],["event_from_error","Create a sentry `Event` from a `std::error::Error`."],["last_event_id","Returns the last event ID captured."],["parse_type_from_debug","Parse the types name from `Debug` output."],["with_integration","Looks up an integration on the current Hub."],["with_scope","Temporarily pushes a scope for a single call optionally reconfiguring it."]],"macro":[["release_name","Returns the intended release for Sentry as an `Option<Cow<'static, str>>`."]],"mod":[["protocol","The current latest sentry protocol version."],["test","This provides testing functionality for building tests."],["types","This crate provides common types for working with the Sentry protocol or the Sentry server.  It's used by the Sentry Relay infrastructure as well as the rust Sentry client."]],"struct":[["Breadcrumb","Represents a single breadcrumb."],["Client","The Sentry Client."],["ClientOptions","Configuration settings for the client."],["Future","A future that binds a `Hub` to its execution."],["Hub","The central object that can manages scopes and clients."],["Scope","Holds contextual data for the current scope."],["ScopeGuard","A scope guard."],["User","Represents user info."]],"trait":[["FutureExt","Future extensions for Sentry."],["Integration","Integration abstraction."],["IntoBreadcrumbs","A helper trait that converts self into an Iterator of Breadcrumbs."],["IntoDsn","Helper trait to convert a string into an `Option<Dsn>`."],["Transport","The trait for transports."],["TransportFactory","A factory creating transport instances."]]});